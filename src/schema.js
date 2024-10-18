import * as Yup from 'yup';

export default Yup.object().shape({
    name: Yup.string().min(2).required("O campo nome é obrigatório!"),
    email: Yup.string().email("O campo não possui um email válido!").required("O campo email é obrigatório!"),
});