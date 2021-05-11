import { React, useState } from 'react';
import { Select, Button } from 'antd';
import 'antd/dist/antd.css';
const { Option } = Select;

function DropDown(props) {
    const [drop1, setDrop1] = useState(null);
    const [drop2, setDrop2] = useState(null);
    const [drop3, setDrop3] = useState(null);

    var list = ['A', 'B', 'C', 'D', 'E'];

    function handleChangeDrop1(value) {
        setDrop1(value);
    }

    function handleChangeDrop2(value) {
        setDrop2(value);
    }

    function handleChangeDrop3(value) {
        setDrop3(value);
    }

    function handeSubmit() {
        if (drop1 === null || drop2 === null || drop3 === null) {
            alert('Please select an item from all the three menu');
        }
        else {
            console.log(`${drop1}, ${drop2}, ${drop3}`);
        }
    }

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <Select style={{ width: 120 }} onChange={handleChangeDrop1}>
                {
                    list.map(function (name, index) {
                        if (name === drop2 || name === drop3) {
                            return <Option value={name} disabled>{name}</Option>
                        }
                        return <Option value={name}>{name}</Option>
                    })
                }
            </Select>
            <br />
            <Select style={{ width: 120 }} onChange={handleChangeDrop2}>
                {
                    list.map(function (name, index) {
                        if (name === drop1 || name === drop3) {
                            return <Option value={name} disabled>{name}</Option>
                        }
                        return <Option value={name}>{name}</Option>
                    })
                }
            </Select>
            <br />
            <Select style={{ width: 120 }} onChange={handleChangeDrop3}>
                {
                    list.map(function (name, index) {
                        if (name === drop2 || name === drop1) {
                            return <Option value={name} disabled>{name}</Option>
                        }
                        return <Option value={name}>{name}</Option>
                    })
                }
            </Select>
            <br /><br />
            <Button type="primary" onClick={handeSubmit}>SUBMIT</Button>
        </div>
    );
}

export default DropDown;