import React, { memo } from "react";
import * as Style from "./Title.style"

type titleProps = {
    content: string;
}

const Title = ({content} : titleProps) => {
    return <Style.Title>{content}</Style.Title>
}

export default memo(Title);