export interface Cars {
  marca_titulo: string | undefined;
  modelo_titulo: string | undefined;
  int_versao: string | undefined;
  int_anomodelofabricacao: string | undefined;
  int_quilometragem: string | undefined;
  loja_cidade: string | undefined;
  vco_cambio: VcoCambio | undefined;
  int_preco_cliente: string | undefined;
  resultados: any;
  total: number;
}

export interface VcoCambio {
  id: number;
  slug: string;
  titulo: string;
}
