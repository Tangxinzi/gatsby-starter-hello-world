import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import "./index.css"
// console.log(styles);

export default function Home() {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  console.log(data);

  return (
    <div className="login">
      <div className="row">
        <span>username</span>: <input type="text" name="username" value="" />
      </div>
      <div className="row">
        <span>password</span>: <input type="text" name="password" value="" />
      </div>
    </div>
  )
}
