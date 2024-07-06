import React from "react";

interface TituloProps {
    titulo: string;
}

const Title: React.FC<TituloProps> = ({ titulo }) => {
    return (
        <div className="text-center p-2">
            <h1 className="text-2xl font-semibold text-indigo-900">{titulo}</h1>
        </div>
    );
};

export default Title;
