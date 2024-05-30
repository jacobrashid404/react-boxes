import { useState } from "react";
import NewBoxForm from "./NewBoxForm.jsx";
import Box from "./Box.jsx";
import { v4 as uuid } from 'uuid';

/** List of box components
 *
 *  State:
 *    - boxes: array of Box props [ {width, height, bgColor}, ...]
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
          <li><Box width={box.width} height={box.height} bgColor={box.bgColor} deleteBox={deleteBox} />
          </li>
        ))}
      </ul>
    );
  }

  function addBox(box) {
    let newBox = { ...boxes, id: uuid() };
    setBoxes(boxes => [...boxes, newBox]);
  }

  function deleteBox(boxToDelete) {
    let updatedBoxList = boxes.filter(box => box.id !== boxToDelete.id);
    setBoxes(boxes => [...updatedBoxList]);
  }

  return (
    <div className="BoxList">
      <NewBoxForm addBox={addBox} />
      {renderBoxes()}
    </div>
  );
}

export default BoxList;