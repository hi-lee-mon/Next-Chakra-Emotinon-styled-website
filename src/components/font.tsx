import { css, Global } from '@emotion/react';
// 実装の詳細は以下を参照
// https://www.gaji.jp/blog/2021/10/06/8224/
const Fonts = () => (
  <Global
    styles={css`
      @import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;700&display=swap');
    `}
  />
);

export default Fonts;
