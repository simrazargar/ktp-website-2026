import React from 'react'
import './InstagramEmbed.css'

const INSTAGRAM_PROFILE_URL =
  'https://www.instagram.com/ktp.usc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
const INSTAGRAM_EMBED_URL = 'https://www.instagram.com/ktp.usc/embed'

function InstagramEmbed({ className = '' }) {
  return (
    <div className={`instagram-embed ${className}`.trim()}>
      <p className="instagram-embed-caption">
        Follow{' '}
        <a
          href={INSTAGRAM_PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="instagram-embed-link"
        >
          @ktp.usc
        </a>{' '}
        on Instagram for rush event details and updates.
      </p>

      <div className="instagram-embed-frame-wrapper">
        <iframe
          src={INSTAGRAM_EMBED_URL}
          className="instagram-embed-frame"
          title="KTP Instagram Profile"
          loading="lazy"
          scrolling="no"
          allowTransparency
        />
      </div>

      <a
        href={INSTAGRAM_PROFILE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="instagram-embed-cta"
      >
        View full profile on Instagram
      </a>
    </div>
  )
}

export default InstagramEmbed
