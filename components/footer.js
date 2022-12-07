import { Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import styles from "../styles/Home.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a> */}

      {/* <div class="grid-fluid">
        <div class="footer-block">
          <div class="footer-block-heading">title</div>
          <ul>
            <li>
              <a>item</a>
            </li>
          </ul>
        </div>
      </div> */}

      <Typography variant="body1" gutterBottom>Super-powered by Google ©2010-2022.</Typography>
      <Typography variant="body1" gutterBottom>Code licensed under an MIT-style License. Documentation licensed under CC BY 4.0.</Typography>
      <Typography variant="body1" gutterBottom>Version 14.2.8-local+sha.a478ab17de.</Typography>
    </div>
  );
}
