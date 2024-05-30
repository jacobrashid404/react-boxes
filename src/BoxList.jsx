import { useState } from "react";
import NewBoxForm from "./NewBoxForm.jsx";
import { v4 as uuid} from 'uuid';

/** List of box components
 *
 *  State:
 *    - boxes: array of Box components [Box, ...]
 *
 *  BoxList -> NewBoxForm -> Box -> BoxList
 *  BoxList -> Box
 */

function BoxList() {
  const [boxes, setBoxes] = useState([]);

  function renderBoxes() {
    return (
      <ul>
        {boxes.map(box => (
          <li>{box}</li>
        ))}
      </ul>
    );
  }

  function addBox(box) {
    let newBox = { ...boxes, id: uuid() };
    setBoxes(boxes => [...boxes, newBox]);
  }
}

export default BoxList;