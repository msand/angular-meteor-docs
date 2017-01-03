const redirectRoutes = {
  'ionic-tutorial': 'tutorials/whatsapp2-tutorial',
  'tutorials/whatsapp': 'tutorials/whatsapp2-tutorial',
  'tutorials/whatsapp2': 'tutorials/whatsapp2-tutorial'
};

export const LEGACY_REDIRECT_ROUTES = Object.keys(redirectRoutes).map(from => {
  const to = redirectRoutes[from];

  return {
    path: from,
    redirectTo: to,
    pathMatch: 'full'
  };
});
