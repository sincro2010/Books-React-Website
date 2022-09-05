import React from 'react';

const Footer = (props) => {
  return (
    <div className="footer">
      <div className="contacts">
								<div className="title">Обратная связь</div>
								<div className="item">
									<div className="icon" className="icon-phone">
										<svg width="7" height="4">
											<use xlinkHref="#phone"></use>
										</svg>
									</div>
									<div className="number">+7 (777) 777-33-22</div>
								</div>
								<div className="item">
          <div className="icon" className="icon-email">
            <svg width="7" height="4">
              <use xlinkHref="#mail"></use>
            </svg>
          </div>
          <a href="https://vk.com/id1298512">vk.com/id1298512</a>
        </div>
      </div>
      <div className="share">
        <div className="title">Соцсети</div>
        <a className="social social-vk" href="https://vk.com/miriadi_mirov"></a>
        <a className="social social-fb" href="https://www.facebook.com/viktoriaomBooks"></a>
        <a className="social social-tw" href="https://twitter.com/viktoria_om"></a>
        <a className="social social-tg" href="https://t.me/viktoriaom_fantesy"></a>
        <a className="social social-ig" href="https://www.instagram.com/viktoriaom_fantasy"></a>
      </div>
    </div>
  );
};

export default Footer;