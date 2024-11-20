import { use } from "react";

export default function PaginaConvite(props: any) {
    const params: any = use(props.params);
    const alias = params.alias;

    return (
        <div>
            <span>{alias}</span>
        </div>
    );
}