import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";

export default function FeedbackModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button color="secondary" onPress={onOpen}>
        ХОЧУ НА КУРС
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <form action="https://formspree.io/f/mayrvkny" method="POST">
                <ModalHeader className="flex flex-col text-center gap-1">
                  Заполните форму
                </ModalHeader>
                <ModalBody>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    variant="bordered"
                    label="ФИО"
                  />
                  <Input
                    id="city"
                    name="city"
                    type="text"
                    variant="bordered"
                    label="Город"
                  />
                  <Input
                    id="age"
                    name="age"
                    type="number"
                    variant="bordered"
                    label="Возраст"
                  />
                  <Input
                    type="number"
                    variant="bordered"
                    label="Номер телефона"
                    id="phone_number"
                    name="phone_number"
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Закрыть
                  </Button>
                  <Button color="primary" type="submit" onPress={onClose}>
                    Отправить
                  </Button>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
