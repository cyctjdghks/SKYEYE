import * as style from "./InputLabel.style";

type inputProps = {
  placeholder: string;
  width: string;
  height: string;
  errorMessage: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputLabel = ({
  placeholder,
  width,
  height,
  errorMessage,
  value,
  onChange,
}: inputProps) => {
  return (
    <style.inputBox
      width={width}>
      <style.label>
        <style.input
          placeholder={placeholder}
          width={width}
          height={height}
          value={value}
          onChange={onChange}
        />
        {errorMessage ? (
          <style.p>{errorMessage}</style.p>
        ) : (
          <style.pp>"qqq"</style.pp>
        )}
      </style.label>
    </style.inputBox>
  );
};

export default InputLabel;
