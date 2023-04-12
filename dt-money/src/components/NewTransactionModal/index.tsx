import  * as Dialog  from "@radix-ui/react-dialog";
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from "./styles";

import { Controller, useForm } from 'react-hook-form';
import * as z from 'zod'    

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome']),
})
type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>



export function NewTransactionModal() {
  const { register, handleSubmit,control, formState:{errors}} = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema)
  })

  function handleCreateNewTransaction( ) {}
  return (
    (
      <Dialog.Portal>
      <Overlay>
        <Content>
            <Dialog.Title>
              Nova Transação
             </Dialog.Title>
              <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
                <input 
                type="text"
                 placeholder="Descrição" 
                 required
                {...register('description')}
                 />
                <input 
                type="number"
                 placeholder="Preço"
                 required 
                 {...register}
                 />
                <input type="text" placeholder="Categoria" required />
                <Controller 
                  control={control}
                  name="type"
                  render={() => {
                    return (
                      <TransactionType>
                        <TransactionTypeButton variant="income" value="income">
                        <ArrowCircleUp size={24}/>
                        Entrada
                        </TransactionTypeButton>
                        <TransactionTypeButton variant="outcome" value="outcome">
                          <ArrowCircleDown size={24}/>
                          Saída
                        </TransactionTypeButton>
                    </TransactionType>
                    )
                  }}
                />
                <button type="submit">Cadastrar</button>
              </form>
            <CloseButton>
              <X size={24}/>
            </CloseButton>
        </Content>
      </Overlay>
  </Dialog.Portal>
    )
  )
}
  
