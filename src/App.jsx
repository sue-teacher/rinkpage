import { useMemo, useState } from 'react'
import { links, profile } from './data/links.js'
import LinkCard from './components/LinkCard.jsx'

export default function App() {
  const [activeTag, setActiveTag] = useState('전체')

  // 데이터에 등장하는 태그들을 모아 필터 칩을 만든다.
  const tags = useMemo(() => {
    const set = new Set()
    links.forEach((l) => l.tag && set.add(l.tag))
    return ['전체', ...set]
  }, [])

  const visible = useMemo(
    () => (activeTag === '전체' ? links : links.filter((l) => l.tag === activeTag)),
    [activeTag]
  )

  return (
    <div className="hub">
      <a className="skip-link" href="#links">본문으로 건너뛰기</a>

      <header className="hub-header">
        <div className="hub-avatar" aria-hidden="true">{profile.emoji}</div>
        <h1 className="hub-title">{profile.name}</h1>
        <p className="hub-tagline">{profile.tagline}</p>
      </header>

      {/* 태그가 2개 이상일 때만 필터 노출 */}
      {tags.length > 2 && (
        <nav className="hub-filters" aria-label="분류 필터">
          {tags.map((tag) => (
            <button
              key={tag}
              className="filter-chip"
              aria-pressed={activeTag === tag}
              onClick={() => setActiveTag(tag)}
            >
              {tag}
            </button>
          ))}
        </nav>
      )}

      {visible.length > 0 ? (
        <ul className="hub-links" id="links">
          {visible.map((link) => (
            <LinkCard key={link.id} link={link} />
          ))}
        </ul>
      ) : (
        <p className="hub-empty" id="links">아직 등록된 학습 웹앱이 없어요.</p>
      )}

      <footer className="hub-footer">
        <p>© {new Date().getFullYear()} {profile.name}</p>
      </footer>
    </div>
  )
}
