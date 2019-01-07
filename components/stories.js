import Story from './updating-story'
import Link from 'next/link'

export default ({ stories, page=1, offset=null }) => (
  <div>
    {
      stories.map((story, i) => (
        <div key={story.id} className="item">
          {
            null != offset
              ? <span className="count">{ i + offset + 1 }</span>
              : null
          }
          <div className="story">
            <Story {...story} />
          </div>
        </div>
      ))
    }
    <footer className="footer">
      <Link prefetch href={`/news?p=${page + 1}`}>
        <a>More</a>
      </Link>
    </footer>

    <style jsx>{`
      .item {
        display: flex;
        margin: 10px 0;
      }

      .count {
        flex-basis: auto;
        flex-grow: 1;
        vertical-align: top;
        display: block;
      }

      .count::after {
        content: ".";
      }

      .story {
        flex: 100;
        display: inline-block;
      }

      .footer {
        padding: 10px 0 40px 30px;
      }

      .footer a {
        color: #000;
        display: inline-block;
        text-decoration: none;
      }
    `}</style>
  </div>
)
