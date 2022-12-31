
function MyInput(props) {
    const {label,placeholder} = props
  return (
    <div className='input-container'>
    <div className='label'>{label}</div>
    <input type="text" name="first_name" placeholder={placeholder}/>
    </div>
  );
}

export default MyInput;
