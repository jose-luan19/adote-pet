import { AxiosError } from "axios";
import { useState , useEffect} from "react";
import { Pet } from "../../@types/pets";
import { ApiService } from "../../services/ApiService";

export function useIndex(){

    const [listaPets, setListaPets] = useState<Pet[]>([]),
        [petSelecionado, setPetSelecionado] = useState<Pet | null>(null),
        [email, setEmail] = useState(''),
        [valor, setValor] = useState(''),
        [mensagem, setMensagem] = useState('');

    useEffect(()=>{
        ApiService.get('/pets')
            .then((resposta)=>{
                setListaPets(resposta.data);
            })
    }, [])

    useEffect(()=>{
        if(petSelecionado === null){
            limparForm();
        }
    },[petSelecionado])
    
    function adotar(){
        if(validarDadosAdocao()){
            ApiService.post('/adocoes',{
                pet_id: petSelecionado?.id,
                email,
                valor
            })
            .then(()=>{
                setPetSelecionado(null);
                setMensagem('Pet adotado com sucesso');
            })
            .catch((error: AxiosError)=>{
                if (error.response?.data.errors !== undefined) {
                    if (error.response?.data.errors.email) {
                        setMensagem(error.response?.data.errors.email[0]);
                    }
                    else if (error.response?.data.errors.valor) {
                        setMensagem(error.response?.data.errors.valor[0]);
                    }
                }else{
                    setMensagem(error.response?.data.message);
                }

            })
        }else{
            setMensagem('Preencha os campos corretamente')
        }
    }

    function validarDadosAdocao(){
        return email.length > 0 && valor.length > 0;
    }

    function limparForm(){
        setEmail('');
        setValor('');
    }

    return { 
        listaPets,
        petSelecionado,
        setPetSelecionado,
        email, 
        setEmail,
        valor, 
        setValor,
        mensagem,
        setMensagem,
        adotar
    };
}