import { Label, LabelText, SelectInput, SelectionWrapper } from "./StyleImageBox";

export default function SelectImageBox({label,idInput,state,changeState}){
    return(
        <SelectionWrapper>
            <LabelText>
                {label}
            </LabelText>
            <Label htmlFor={idInput}>Selecione </Label>
            <SelectInput id={idInput} type="file"/>
        </SelectionWrapper>
    );
}