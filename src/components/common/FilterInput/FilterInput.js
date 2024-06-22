import React from "react";
import styled from "styled-components";
import '../../../pages/App.css';

const Input = styled.input.attrs((props) => ({
    type: "text",
    size: props.small ? 5 : undefined,
}))`
  height: 32px;
  width: 350px !important;
  border-radius: 1px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: 1px solid #e5e5e5;
  padding: 0 32px 0 16px;
`;

const ClearButton = styled.button`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background: #8b0000;
  color: white;
  height: 34px;
  width: 32px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export function FilterInput({ filterText, onFilter, onClear }) {
    return (
        <div className="formStyle">
            <Input
                id="search"
                type="text"
                placeholder="Búsqueda..."
                value={filterText}
                onChange={onFilter}
            />
        </div>
    );
}
