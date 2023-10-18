export default function Hamburger({name, href, index}) {
  return (
    <header className='' key={index}>
     <a href={href}>{name}</a>
    </header>
  )
}
