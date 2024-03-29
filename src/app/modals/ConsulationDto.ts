import { OrdonnanceDto } from "./OrdonnanceDto";
import { RendezVousDto } from "./RendezVousDto";

export interface ConsultationDto{
  id?:                       number;
  description?:              string;
  createdAt?:                Date;
  isEnabled?:                boolean;
  rendezVous?:               RendezVousDto;
  ordonnance?: OrdonnanceDto;

}



