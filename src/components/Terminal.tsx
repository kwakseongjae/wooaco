import React from "react";

function Terminal() {
  return (
    <div className="terminal">
      <p>
        SSAFY@2□□PC167 MINGW64 ~/Desktop/wooaco (main) $ git push -u origin main
        --force Enumerating objects: 34, done. Counting objects: 100% (34/34),
        done. Delta compression using up to 16 threads Compressing objects: 100%
        (32/32), done. Writing objects: 100% (34/34), 229.82 KiB | 12.10 MiB/s,
        done. Total 34 (delta 3), reused 0 (delta 0), pack-reused 0 remote:
        Resolving deltas: 100% (3/3), done. To
        https://github.com/kwakseongjae/wooaco.git + 2ad1835...d631542 main
        -&gt; main (forced update) branch 'main' set up to track 'origin/main'.
      </p>
    </div>
  );
}

export default Terminal;
