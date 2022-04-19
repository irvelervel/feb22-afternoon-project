// we're passing two props: title and subTitle

// in html inline styling worked like this
{
  /* <div style="color: red;">CIAO</div> */
}

const Welcome = (props) => (
  <div style={{ color: 'yellow' }}>
    <h1>{props.title}</h1>
    <p>{props.subTitle}</p>
  </div>
)

export default Welcome

// D R Y
// Don't Repeat Yourself
