import * as style from "./InputLabel.style";

type inputProps = {
  placeholder: string;
  width: string;
  height: string;
  errorMessage: string;
  value: string;
  fontSize: string;
  errorFontSize: string;
  type: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputLabel = ({
  placeholder,
  width,
  height,
  errorMessage,
  value,
  fontSize,
  type,
  errorFontSize,
  onChange,
}: inputProps) => {
  return (
    <style.inputBox width={width} height={height}>
      <style.label>
        <style.input
          placeholder={placeholder}
          width={width}
          height={height}
          value={value}
          fontSize={fontSize}
          onChange={onChange}
          type={type}
        />
        {errorMessage ? (
          <style.p errorFontSize={errorFontSize}>{errorMessage}</style.p>
        ) : (
          <style.pp errorFontSize={errorFontSize}>"qqq"</style.pp>
        )}
      </style.label>
    </style.inputBox>
  );
};

export default InputLabel;
