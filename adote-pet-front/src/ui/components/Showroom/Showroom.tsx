import { Button } from '@mui/material'
import { Pet } from '../../../data/@types/pets'
import { TextService } from '../../../data/services/TextService';
import {
    DescriptionItemShowroomStyled,
    ImageShowroomStyled,
    InfoItemShowroomStyled,
    ItemOfShowroomStyled,
    NameItemShowroomStyled,
    ShowroomStyled
} from './Showroom.style'

interface ShowroomProps {
    pets: Pet[];
    onSelect: (pet: Pet) => void;
}

export default function Showroom(props: ShowroomProps) {
    const limitedText = 200;
    return (
        <ShowroomStyled>
            {props.pets.map(pet => (
                <ItemOfShowroomStyled key={pet.id}>
                    <ImageShowroomStyled src={pet.urlImage} alt={pet.name} />
                    <InfoItemShowroomStyled>
                        <NameItemShowroomStyled>{pet.name}</NameItemShowroomStyled>
                        <DescriptionItemShowroomStyled>
                            {TextService.limitText(pet.history, limitedText)}
                        </DescriptionItemShowroomStyled>
                        <Button 
                            variant={'contained'} 
                            fullWidth 
                            onClick={() => props.onSelect(pet)}
                        >
                            Adotar {pet.name}
                        </Button>
                    </InfoItemShowroomStyled>
                </ItemOfShowroomStyled>
            ))}
        </ShowroomStyled>
    )
}