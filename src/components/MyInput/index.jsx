
function MyInput(props) {
  const {label,placeholder,id,update,index,error,value} = props
  return (
    <div className={error?'input-container input-error':'input-container'}>
      <div className='label'>{label}</div>
      <input type={id==="phone_number"?"tel":"text"} name={id} placeholder={placeholder} onChange={e=>{
        const value = e.target.value === "" ? null : e.target.value
        update(value,index)
      }} value={value===null?"":value}/>
    </div>
  );
}

export default MyInput;
