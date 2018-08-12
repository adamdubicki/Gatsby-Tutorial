import React from "react";
import g from "glamorous";
import { css } from "glamor";
import { rythem } from "../utils/typography";

const linkStyle = css({ float: 'right' });

export default ({children}) => (
  <g.Div
    margin={'0 auto'}
    maxWidth={700}
    padding={rythem(2)}
    paddingTop={rythem(1.5)}
  >
    <Link to={'/'}>
      <g.H3
        marginBottom={rythem(2)}
        display={'inline-block'}
        fontStyle={'normal'}
      >
        Pandas Eating Lots
      </g.H3>
    </Link>
    <Link className={linkStyle} to={'/about/'}>
      About
    </Link>
    {children()}
  </g.Div>
);