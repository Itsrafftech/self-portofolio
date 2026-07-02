import Link from 'next/link';

export default function NotFound() {
  return (
    <main style={{ minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', gap:16, textAlign:'center', padding:'2rem' }}>
      <h1 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(4rem,20vw,10rem)', lineHeight:1, color:'var(--accent)' }}>404</h1>
      <p style={{ color:'var(--text-secondary)', fontSize:16, marginBottom:8 }}>Halaman ini tidak ditemukan.</p>
      <Link href="/" style={{ padding:'10px 24px', borderRadius:99, background:'var(--accent)', color:'black', fontWeight:600, fontSize:14, textDecoration:'none' }}>
        ← Kembali ke Beranda
      </Link>
    </main>
  );
}