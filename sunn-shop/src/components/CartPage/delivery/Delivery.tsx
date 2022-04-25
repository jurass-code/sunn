import { Radio } from "@mui/material";
import React, { useState, useEffect } from "react";
import s from "./Delivery.module.css";
import { daDataApi } from "../../../api/daDataApi";
import { Field } from "formik";

export const Delivery: React.FC = () => {
  const [value, setValue] = useState("");
  const [prompts, setPrompts] = useState([]);
  const [promptsEl, setPromptsEl] = useState([] as any);
  const [promptsComponent, setPromptsComponent] = useState(true);

  const [fullAddressVision, setFullAddressVision] = useState(true);

  const [valueAddress, setValueAddress] = useState("");
  const [promptsAddress, setPromptsAddress] = useState([]);
  const [promptsElAddress, setPromptsElAddress] = useState([] as any);
  const [promptsComponentAddress, setPromptsComponentAddress] = useState(true);

  useEffect(() => {
    setPromptsEl(
      prompts.map((el: any, i) => {
        return (
          <div key={i}>
            <AutocomlpeteItem
              onClickHandler={setValue}
              city={el.data.settlement_with_type || el.data.city_with_type}
              value={el.value}
              region={el.data.region_with_type}
              setPromptsEl={setPromptsEl}
              setFullAdressVision={setFullAddressVision}
            />
          </div>
        );
      })
    );
  }, [prompts]);

  const getAutocomplite = async (text: string) => {
    const res = await daDataApi.getDataCity(text);
    setPrompts(res);
    console.log(res);
  };
  const getAutocompliteAddres = async (text: string, fias_id: string) => {
    const res = await daDataApi.getDataAddress(text, fias_id);
    console.log(res);
  };

  return (
    <div>
      <h6 className={`${s.title} Headline5`}>Доставка</h6>
      <div className={s.boxScrollInp}>
        <div className={s.scroll}>
          <input
            id="city"
            className={`text3 ${s.inputWithPrompts}`}
            value={value}
            onChange={(e: any) => {
              setValue(e.target.value);
              getAutocomplite(value);
            }}
          />
          {promptsComponent && <div className={s.scrollBlock}>{promptsEl}</div>}
        </div>
      </div>
    </div>
  );
};

type propsType = {
  city: string;
  region: string;
  value: string;
  onClickHandler: (value: string) => void;
  setPromptsEl: (promts: any) => void;
  setFullAdressVision: React.Dispatch<React.SetStateAction<boolean>>;
};
export const AutocomlpeteItem: React.FC<propsType> = ({
  setFullAdressVision,
  city,
  region,
  value,
  onClickHandler,
  setPromptsEl,
}) => {
  return (
    <div
      className={s.autocomlpeteItem}
      onClick={() => {
        onClickHandler(city);
        setPromptsEl([]);
        setFullAdressVision(true);
      }}
    >
      <p className={s.city}>{city}</p>
      <p className={s.region}>{region}</p>
    </div>
  );
};
