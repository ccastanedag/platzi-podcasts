import Link from 'next/link'

export default class extends React.Component {

  static async getInitialProps({ query }) {
    let idChannel = query.id

    let [reqChannel, reqSeries, reqAudios] = await Promise.all([
      fetch(`https://api.audioboom.com/channels/${idChannel}`),
      fetch(`https://api.audioboom.com/channels/${idChannel}/child_channels`),
      fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`)
    ])

    let dataChannel = await reqChannel.json()
    let channel = dataChannel.body.channel

    let dataAudios = await reqAudios.json()
    let audioClips = dataAudios.body.audio_clips

    let dataSeries = await reqSeries.json()
    let series = dataSeries.body.channels

    return {
      channel,
      audioClips,
      series
    }
  }

  render() {
    const { channel, audioClips, series } = this.props
    return (
      <div>
        <header>Podcasts</header>
        <h1>{channel.title}</h1>
        <h2>Series</h2>
        {
          series.map((serie) => (
            <div>{serie.title}</div>
          ))
        }
        <h2>Últimos Podcasts</h2>
        {
          audioClips.map((clip) => (
            <Link href={`/podcast?audio=${clip.id}`}>
              <a className="podcast">
                {clip.title}
              </a>
            </Link>
          ))
        }
        <style jsx>{`
          h1 {
            font-weight: 600;
            padding: 15px;
          }

          header {
            color: #fff;
            background: #8756ca;
            padding: 1em;
            text-align: center;
          }

          .podcast {
            display:block;
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