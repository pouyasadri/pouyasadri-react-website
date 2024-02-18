import React from 'react';

class FiverrComponent extends React.Component {
    render() {
        return (
            <div style={{height: "2rem"}}
                dangerouslySetInnerHTML={{
                    __html: `
            <div itemscope itemtype='http://schema.org/Person' class='fiverr-seller-widget' style='display: inline-block;'>
              <a itemprop='url' href=https://www.fiverr.com/pouyasadri rel="nofollow" target="_blank" style='display: inline-block;'>
                <div class='fiverr-seller-content' id='fiverr-seller-widget-content-d4714d32-f58b-45e3-8eb2-4c5afbfa27f1' itemprop='contentURL' style='display: none;'></div>
                <div id='fiverr-widget-seller-data' style='display: none;'>
                  <div itemprop='name' >pouyasadri</div>
                  <div itemscope itemtype='http://schema.org/Organization'><span itemprop='name'>Fiverr</span></div>
                  <div itemprop='jobtitle'>Seller</div>
                  <div itemprop='description'>Hello! I'm Seyedpouya, a Full Stack Web Developer with over 6 years of experience. Trained in computer science, I excel in PHP, Laravel, JavaScript, React js, and more. My freelance journey includes successful projects. Fluent in English, Persian, French, and Spanish, I'm ready to bring your web development visions to life with efficiency and creativity.</div>
                </div>
              </a>
            </div>
            <script id='fiverr-seller-widget-script-d4714d32-f58b-45e3-8eb2-4c5afbfa27f1' src='https://widgets.fiverr.com/api/v1/seller/pouyasadri?widget_id=d4714d32-f58b-45e3-8eb2-4c5afbfa27f1' data-config='{"category_name":"Programming \u0026 Tech"}' async='true' defer='true'></script>
          `,
                }}
            />
        );
    }
}

export default FiverrComponent;
