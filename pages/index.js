import 'isomorphic-fetch'

export default class extends React.Component {
  static async getInitialProps() {
    let req = await fetch('https://api.audioboom.com/channels/recommended')
    let { body: channels } = await req.json()

    return { channels }
  }

  render() {
    const { channels } = this.props
    return (
      <div>
        <header>Podcasts</header>
        <div className="channels">
          {
            channels.map((channel) => {
              return (
                <div className="channel">
                  <img src={channel.urls.logo_image.original} alt={`${channel.title} icon`}/>
                  <h2>{channel.title}</h2>
                </div>
              )
            })
          }
        </div>
        <style jsx>{`
          header {
            color: #fff;
            background: #8756ca;
            padding: 1em;
            text-align: center;
          }

          .channels {
            display: grid;
            grid-gap: 15px;
            padding: 15px;
            grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
          }

          .channel {
           border-radius: 3px;
           box-shadow: 0px 2px 6px rgba(0,0,0,0.15);
           margin-bottom: 0.5em;
          }

          .channel img {
            width: 100%;
          }

          h2{
            padding: 5px;
            font-size: 0.9em;
            font-weight: 600;
            margin:0;
            text-align:center;
          }
        `}</style>

        <style jsx global>{`
          body {
            margin: 0;
            font-family: system-ui;
            backround: white;
          }
        `}</style>
      </div>
    )
  }
}