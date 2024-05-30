/** Render a box element
 *
 * Props:
 *  height
 *  width
 *  backgroundColor
 *  deleteBox
 *
 * BoxList -> NewBoxForm -> Box
 */

function Box({ height, width, backgroundColor, deleteBox }) {
  const style = {
    width: width,
    height: height,
    backgroundColor: backgroundColor
  };

  return (
    <div>
      <div style={style} ></div>
      <button onClick={deleteBox}></button>
    </div>
  );
}

export default Box;