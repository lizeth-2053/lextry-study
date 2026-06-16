'use client';

export default function Footer() {
  return (
    <footer className="border-t border-border py-12 bg-card/20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663767533725/kHJkEnJgZ35rmgPHDaWjdS/logo-symbol-3CS92smZG9vBYSrfTPVHXU.webp"
                  alt="Lextry Study"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-700 text-sm text-foreground tracking-tight">
                  Lextry
                </span>
                <span
                  className="text-[9px] font-body font-500 tracking-widest uppercase"
                  style={{ color: 'var(--lextry-primary)' }}
                >
                  Study
                </span>
              </div>
            </div>
            <p className="font-body text-xs text-muted-foreground leading-relaxed max-w-[200px]">
              Tu sistema universitario inteligente. Diseñado para estudiantes que quieren dominar su carrera.
            </p>
          </div>

          {/* Links */}
          {[
            {
              title: 'Producto',
              links: ['Características', 'Precios', 'Changelog', 'Roadmap'],
            },
            {
              title: 'Recursos',
              links: ['Documentación', 'Blog', 'Comunidad', 'Soporte'],
            },
            {
              title: 'Empresa',
              links: ['Acerca de', 'Privacidad', 'Términos', 'Contacto'],
            },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-body text-xs font-700 text-foreground uppercase tracking-wider mb-4">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="lx-divider mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-muted-foreground">
            © 2025 Lextry Study. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <span>Hecho con</span>
            <span style={{ color: 'var(--lextry-primary)' }}>♥</span>
            <span>para estudiantes universitarios</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
