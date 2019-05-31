export default class extends React.Component {
  render() {
    return (
      <div className="aboutContainer">
        <img src="static/platzi-logo.png" />
        <h1>Creado por Carlos Castañeda</h1>
        <p>Curso de Next.JS de Platzi</p>
        <style jsx>{`
          .aboutContainer {
            display: flex;
            flex-direction: column;
            align-items:center;
            justify-content: center;
            margin: 3em 0;
          }
          h1 {
            color: white;
            font-family: Arial;
          }
          p{
            color: white;
            font-family: Arial;
          }
          img {
            width: 25%;
            margin-bottom: 3em;
          }
        `}</style>
        <style jsx global>{`
         body {
          background: rgb(28,54,67);
         }
        `}</style>
      </div>
    )
  }
}