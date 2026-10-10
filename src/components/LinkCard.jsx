// 링크 하나를 보여주는 카드.
// status === 'soon' 이면 클릭 불가능한 '준비중' 카드로 표시한다.
export default function LinkCard({ link }) {
  const { title, description, url, emoji, tag, accent, status } = link
  const isSoon = status === 'soon'
  const style = accent ? { '--card-accent': accent } : undefined

  // 호버 시 광택이 마우스를 따라오도록 커서 x 위치를 CSS 변수로 전달
  function handleMove(e) {
    const rect = e.currentTarget.getBoundingClientRect()
    const mx = ((e.clientX - rect.left) / rect.width) * 100
    e.currentTarget.style.setProperty('--mx', `${mx}%`)
  }

  const inner = (
    <>
      <span className="link-emoji" aria-hidden="true">{emoji || '🔗'}</span>
      <span className="link-body">
        <span className="link-title-row">
          <h2 className="link-title">{title}</h2>
          {tag && <span className="link-tag">{tag}</span>}
          {isSoon && <span className="link-badge-soon">준비중</span>}
        </span>
        {description && <p className="link-desc">{description}</p>}
      </span>
      {!isSoon && <span className="link-arrow" aria-hidden="true">→</span>}
    </>
  )

  if (isSoon) {
    return (
      <li>
        <div
          className="link-card is-soon"
          style={style}
          aria-disabled="true"
          aria-label={`${title} — 준비중`}
        >
          {inner}
        </div>
      </li>
    )
  }

  return (
    <li>
      <a
        className="link-card"
        style={style}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        onMouseMove={handleMove}
        aria-label={`${title}${description ? `, ${description}` : ''} — 새 탭에서 열기`}
      >
        {inner}
      </a>
    </li>
  )
}
