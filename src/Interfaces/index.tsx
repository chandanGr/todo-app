import { InputNumber, Input, Form } from 'antd';
import React from 'react';

export interface Item {
    key: string;
    name: string;
    age: number;
    address: string;
  }

export interface FormFieldProps {
  // type : 'Date' | 'text';
  label : string;
  placeHolder?: string;
  name?: string;
  rules?: any;
  // onChange?: any;
}

export interface IModalButtonProps{
  title?: string;
  type?: 'primary'|'default'|'dashed'|'link'
}

export interface IColumnData{
  title: string,
  dataIndex: string,
  width?: string,
  editable?: true,
}

export  interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
    editing: boolean;
    dataIndex: string;
    title: any;
    inputType: 'number' | 'text';
    record: Item;
    index: number;
    children: React.ReactNode;
  }
  export const EditableCell: React.FC<EditableCellProps> = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
  }) => {
    const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
    return (
      <td {...restProps}>
        {editing ? (
          <Form.Item
            name={dataIndex}
            style={{ margin: 0 }}
            rules={[
              {
                required: true,
                message: `Please Input ${title}!`,
              },
            ]}
          >
            {inputNode}
          </Form.Item>
        ) : (
          children
        )}
      </td>
    );
  };