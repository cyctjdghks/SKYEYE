import * as style from "./InputLabel.style";

type inputProps = {
  placeholder: string;
  width: string;
  height: string;
  errorMessage: string;
  value: string;
  fontSize: string;
  type: string;
  readonly?: boolean;
  errorFontSize: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputLabel = ({
  placeholder,
  errorFontSize,
  width,
  height,
  errorMessage,
  value,
  fontSize,
  type,
  onChange,
  readonly,
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
          readOnly={readonly}
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
