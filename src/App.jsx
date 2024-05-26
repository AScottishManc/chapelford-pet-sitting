import './app.scss';


function App () {
  return (
    <div className='body'>
      <h1>Typography Example</h1>
      <p>This is just some example content to assist with the styling of the typography. I did take a copy the content from <a href="https://standards-schmandards.com/exhibits/wysiwyg/sampledoc.htm">Standard Schmandards</a> and updated to include some additional information that may be useful.</p>
      <p>At the moment, there isn't much to link to but here is an <a href="/" title="Homepage">2006</a> internal link. It contains various markup features commonly used by content editors or "<span lang="fr">rédacteurs de contenu</span>" as they are called in <a href="http://en.wikipedia.org/wiki/France" title="Wikipedia article about France">France</a>.</p>
      <p> It is important that a <acronym title="What you see is what you get">WYSIWYG</acronym> tool has features that are <i>easily</i> available for the editor. If not, there is a risk that content won't receive <strong>proper</strong> markup.</p>
      <p>Examples of commonly found content are:</p>

      <h2>Headings</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>

      <h2>Lists</h2>
      <h3>Ordered List</h3>
      <ol>
        <li>Headings</li>
        <li>Links (with optional title)</li>
        <li>Lists (like this one) 
          <ul>
            <li>including nested lists </li>
          </ul>
        </li>
        <li>Tables
          <ol>
            <li>caption</li>
            <li>headers</li>
            <li>summary</li>
          </ol>
        </li>
        <li>Language information</li>
        <li>Acronyms and abbreviations</li>
        <li>Emphasis and strong emphasis </li>
        <li>Quotes, inline and block </li>
        <li>Images</li>
      </ol>

      <h3>Un-ordered List</h3>
      <ol>
        <li>Headings</li>
        <li>Links (with optional title)</li>
        <li>Lists (like this one) 
          <ol>
            <li>including nested lists </li>
          </ol>
        </li>
        <li>Tables
          <ul>
            <li>caption</li>
            <li>headers</li>
            <li>summary</li>
          </ul>
        </li>
        <li>Language information</li>
        <li>Acronyms and abbreviations</li>
        <li>Emphasis and strong emphasis </li>
        <li>Quotes, inline and block </li>
        <li>Images</li>
      </ol>

      <h2>Test procedure </h2>
      <p>In the test we will try to recreate this document using the editor tools. To make sure tables can be inserted <em>properly</em> we re-visit banana import statistics from <b>1998</b>.</p>

      <table summary="Sweden was the top importing country by far in 1998.">
        <thead>
          <tr>
            <th>Country</th>
            <th>Millions of US dollars per million people</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sweden</td>
            <td>17.12</td>
          </tr>
          <tr>
            <td>United&nbsp;Kingdom</td>
            <td>8.88</td>
          </tr>
          <tr>
            <td>Germany</td>
            <td>8.36</td>
          </tr>
          <tr>
            <td>Italy</td>
            <td>5.96</td>
          </tr>
          <tr>
            <td>United States</td>
            <td>4.78</td>
          </tr>
        </tbody>
      </table>

      <blockquote cite="http://fawny.org/rhcp.html#me">
        "Since boyhood I’ve always believed, at the deepest level, that redheads are standard-bearers of the grandest and most wondrous human beauty."
      </blockquote>

      <p>I agree completely and I am honoured to be a contributor to the occasional redhead cluster phenomenon. Which brings us to the next item, a picture of a readheaded man. </p>
      <img src="https://placehold.co/600x400" alt="Placeholder image" />
      <p>By coincidence he has a sticker that says "Clark" on him. <q>It's me</q> says Peter Krantz. </p>
    </div>
  )
}

export default App
