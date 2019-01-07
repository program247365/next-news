import Header from './header'
import Meta from './meta'

export default ({ children }) => (
  <div className="main">
    <Meta />
    <Header />

    <div className="page">
      { children }
    </div>

    <style jsx>{`
      .main {
        width: 85%;
        margin: auto;
        padding: 10px 0 0 0;
      }

      .page {
        color: #828282;
        background: #fff;
        padding: 3px 10px;
        font-size: 1.2em; /* 16 * 0.75 = 12 */
        line-height: 1.5em
      }

      @media (max-width: 750px) {
        .main {
          padding: 0;
          width: auto;
        }
      }
    `}</style>
  </div>
)
