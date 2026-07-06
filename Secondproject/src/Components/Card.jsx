
export const Card = (props) => {
    // console.log(props)
  return (
    <>
    <div className="card">
        <img src={props.image} alt="" />
        <p>{props.title}</p>
        <p>{props.price}</p>
    </div>
    </>
  )
}
