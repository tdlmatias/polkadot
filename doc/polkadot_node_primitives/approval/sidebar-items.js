window.SIDEBAR_ITEMS = {"constant":[["ASSIGNED_CORE_CONTEXT","A static context used for transcripts indicating assigned availability core."],["CORE_RANDOMNESS_CONTEXT","A static context associated with producing randomness for a core."],["RELAY_VRF_DELAY_CONTEXT","A static context used for all relay-vrf-modulo VRFs."],["RELAY_VRF_MODULO_CONTEXT","A static context used for all relay-vrf-modulo VRFs."],["RELAY_VRF_STORY_CONTEXT","A static context used to compute the Relay VRF story based on the VRF output included in the header-chain."],["TRANCHE_RANDOMNESS_CONTEXT","A static context associated with producing randomness for a tranche."]],"enum":[["ApprovalError","Errors that can occur during the approvals protocol."],["AssignmentCertKind","Different kinds of input data or criteria that can prove a validator’s assignment to check a particular parachain."]],"fn":[["babe_unsafe_vrf_info","Extract the slot number and relay VRF from a header."]],"struct":[["AssignmentCert","A certification of assignment."],["BlockApprovalMeta","Metadata about a block which is now live in the approval protocol."],["IndirectAssignmentCert","An assignment criterion which refers to the candidate under which the assignment is relevant by block hash."],["IndirectSignedApprovalVote","A signed approval vote which references the candidate indirectly via the block."],["RelayVRFStory","random bytes derived from the VRF submitted within the block by the block author as a credential and used as input to approval assignment criteria."],["Slot","Unit type wrapper that represents a slot."],["UnsafeVRFOutput","An unsafe VRF output. Provide BABE Epoch info to create a `RelayVRFStory`."],["VrfOutput","VRF output type suitable for schnorrkel operations."],["VrfProof","VRF proof type suitable for schnorrkel operations."],["VrfSignature","VRF signature data"],["VrfTranscript","Transcript ready to be used for VRF related operations."]],"type":[["DelayTranche","Validators assigning to check a particular candidate are split up into tranches. Earlier tranches of validators check first, with later tranches serving as backup."],["Randomness","Randomness type required by BABE operations."]]};