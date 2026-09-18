"use client";

import dynamic from "next/dynamic";

/**
 * app/page.tsx（Server Component）から直接Client Componentをdynamic importしても
 * 自動コード分割の対象外になるため、Client Component側でdynamic()を呼ぶことで
 * Contact.tsxを独立したチャンクに分離する。ssr:trueによりSSR出力・見た目・
 * アンカー遷移(#contact)は変更前と同一のまま維持する。
 */
const Contact = dynamic(() => import("./Contact"), { ssr: true });

export default Contact;
