import { Box, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react";

import styles from "./components.module.scss";
import React, { useEffect } from "react";
import { getChatrooms } from "@/utils/api";

export interface ModalProps {
    open: boolean;
    onClose: () => void;
    closeable?: boolean;
}

interface GenericModalProps extends ModalProps {
    title: string;
    children?: React.ReactNode;
}
const GenericModal: React.FC<GenericModalProps> = ({ open, onClose, closeable, title, children }) => {
    return (
        <Modal isOpen={open} onClose={onClose}>
            <ModalOverlay className={styles.modalOverlay} />
            <ModalContent className={styles.modalContent}>
                <ModalHeader>{title}</ModalHeader>
                {closeable && <ModalCloseButton />}
                {children}
            </ModalContent>
        </Modal>
    )
};

const LandingModalBody = () => {
    return (
        <ModalBody className={styles.modalBody}>
            <ChatroomSearch />
            <ChatroomCreate />
        </ModalBody>
    )
}

const ChatroomSearch = () => {
    return (
        <Box className={styles.modalItemContainer}>
            <Heading className={styles.modalItemTitle} as='h2' size='sm'>Search for a Chatroom</Heading>
        </Box>
    )
}

const ChatroomCreate: React.FC = () => {
    return (
        <Box className={styles.modalItemContainer}>
            <Heading className={styles.modalItemTitle} as='h2' size='sm'>Create a Chatroom</Heading>
        </Box>
    )
}

export const LandingModal: React.FC<ModalProps> = ({ open, onClose, closeable }) => {
    return (
        <GenericModal open={open} onClose={onClose} closeable={closeable} title={'Next Chatroom'}>
            <LandingModalBody />
        </GenericModal >
    )
}

