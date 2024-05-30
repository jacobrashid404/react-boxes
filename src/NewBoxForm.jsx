/** Form for adding new box to page
 *
 * State:
 *  -formData: { height, width, backgroundColor}, addBox
 *
 * BoxList -> NewBoxForm
 */

function NewBoxForm({ addBox }) {

  // TODO: set the initial state of form here, empty strings
  // TODO: pull out formData and setFormData from useState

  function handleSubmit(evt) {
    evt.preventDefault();
    addBox({ width: Number(formData.width), height: Number(formData.height) });
    setFormData(initialState);
  }

  // TODO: return the form
}

export default NewBoxForm;