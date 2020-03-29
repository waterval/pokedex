import * as React from "react";

const Filters = props => (
    <select name="type">
        <option value="default">-</option>
        <option value="grass">Grass</option>
        <option value="water">Water</option>
    </select>
);

export default Filters;
