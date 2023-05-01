export interface authGoogle {
  photoURL: string | null
  displayName: string | null
  idToken: string | undefined
}
export interface authSistema {
  correo:string,
  password:string
  recordar:boolean
}export interface respAuth {
  ok:      boolean;
  msg:     string;
  token:   string;
  usuario: Usuario;
}

export interface Usuario {
  img:      string;
  correo:   string;
  telefono: string;
  rol:      string;
  permisos: any[];
  estado:   string;
  creacion: Date;
  editado:  Date;
  uid:      string;
}
