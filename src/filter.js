const mat = {"ACI Data": {"name": "CE", "size": "2", "description": "Add with carry immediate"}, "ADC A": {"name": "8F", "size": "1", "description": "Add with carry"}, "ADC B": {"name": "88", "size": "1", "description": "Add with carry"}, "ADC C": {"name": "89", "size": "1", "description": "Add with carry"}, "ADC D": {"name": "8A", "size": "1", "description": "Add with carry"}, "ADC E": {"name": "8B", "size": "1", "description": "Add with carry"}, "ADC H": {"name": "8C", "size": "1", "description": "Add with carry"}, "ADC L": {"name": "8D", "size": "1", "description": "Add with carry"}, "ADC M": {"name": "8E", "size": "1", "description": "Add with carry to memory(HL)"}, "ADD A": {"name": "87", "size": "1", "description": "ADD"}, "ADD B": {"name": "80", "size": "1", "description": "ADD"}, "ADD C": {"name": "81", "size": "1", "description": "ADD"}, "ADD D": {"name": "82", "size": "1", "description": "ADD"}, "ADD E": {"name": "83", "size": "1", "description": "ADD"}, "ADD H": {"name": "84", "size": "1", "description": "ADD"}, "ADD L": {"name": "85", "size": "1", "description": "ADD"}, "ADD M": {"name": "86", "size": "1", "description": "ADD to memory"}, "ADI Data": {"name": "C6", "size": "2", "description": "ADD Immediate"}, "ANA A": {"name": "A7", "size": "1", "description": "AND Accumulator , A = A & r"}, "ANA B": {"name": "A0", "size": "1", "description": "AND Accumulator , A = A & r"}, "ANA C": {"name": "A1", "size": "1", "description": "AND Accumulator , A = A & r"}, "ANA D": {"name": "A2", "size": "1", "description": "AND Accumulator , A = A & r"}, "ANA E": {"name": "A3", "size": "1", "description": "AND Accumulator , A = A & r"}, "ANA H": {"name": "A4", "size": "1", "description": "AND Accumulator , A = A & r"}, "ANA L": {"name": "A5", "size": "1", "description": "AND Accumulator , A = A & r"}, "ANA M": {"name": "A6", "size": "1", "description": "AND Accumulator and memory"}, "ANI Data": {"name": "E6", "size": "2", "description": "AND Immediate"}, "CALL Label": {"name": "CD", "size": "3", "description": "Call unconditional"}, "CC Label": {"name": "DC", "size": "3", "description": "Call on carry"}, "CM Label": {"name": "FC", "size": "3", "description": "Call on minus"}, "CMA": {"name": "2F", "size": "1", "description": "Complement accumulator"}, "CMC": {"name": "3F", "size": "1", "description": "Complement carry"}, "CMP A": {"name": "BF", "size": "1", "description": "Compare , A -r"}, "CMP B": {"name": "B8", "size": "1", "description": "Compare , A -r"}, "CMP C": {"name": "B9", "size": "1", "description": "Compare , A -r"}, "CMP D": {"name": "BA", "size": "1", "description": "Compare , A -r"}, "CMP E": {"name": "BB", "size": "1", "description": "Compare , A -r"}, "CMP H": {"name": "BC", "size": "1", "description": "Compare , A -r"}, "CMP L": {"name": "BD", "size": "1", "description": "Compare , A -r"}, "CMP M": {"name": "BD", "size": "1", "description": "Compare with memory, A -(HL)"}, "CNC Label": {"name": "D4", "size": "3", "description": "Call on carry"}, "CNZ Label": {"name": "C4", "size": "3", "description": "Call on no zero"}, "CP Label": {"name": "F4", "size": "3", "description": "Call on Plus"}, "CPE Label": {"name": "EC", "size": "3", "description": "Call on Parity Even"}, "CPI Data": {"name": "FE", "size": "2", "description": "Compare Immediate"}, "CPO Label": {"name": "E4", "size": "3", "description": "Call on Parity Odd"}, "CZ Label": {"name": "CC", "size": "3", "description": "Call on Zero"}, "DAA": {"name": "27", "size": "1", "description": "Decimal Adjust Accumulator , A =BCD format , used for BCD Addition"}, "DAD B": {"name": "09", "size": "1", "description": "Double Add BC to HL , HL =HL +BC"}, "DAD D": {"name": "19", "size": "1", "description": "Double Add DE to HL , HL =HL +DE"}, "DAD H": {"name": "29", "size": "1", "description": "Double Add HL to HL , HL =HL +HL"}, "DAD SP": {"name": "39", "size": "1", "description": "Double Add SP(Stack Pointer) to HL , HL =HL +SP"}, "DCR A": {"name": "3D", "size": "1", "description": "Decrement"}, "DCR B": {"name": "05", "size": "1", "description": "Decrement"}, "DCR C": {"name": "0D", "size": "1", "description": "Decrement"}, "DCR D": {"name": "15", "size": "1", "description": "Decrement"}, "DCR E": {"name": "1D", "size": "1", "description": "Decrement"}, "DCR H": {"name": "25", "size": "1", "description": "Decrement"}, "DCR L": {"name": "2D", "size": "1", "description": "Decrement"}, "DCR M": {"name": "35", "size": "1", "description": "Decrement Memory , HL = HL -1"}, "DCX B": {"name": "0B", "size": "1", "description": "Decrement BC"}, "DCX D": {"name": "1B", "size": "1", "description": "Decrement DE"}, "DCX H": {"name": "2B", "size": "1", "description": "Decrement HL"}, "DCX SP": {"name": "3B", "size": "1", "description": "Decrement Stack Pointer"}, "DI": {"name": "F3", "size": "1", "description": "Disable interrrupts"}, "EI": {"name": "FB", "size": "1", "description": "Enable interrupts"}, "HLT": {"name": "76", "size": "1", "description": "Halt"}, "IN Port-address": {"name": "DB", "size": "2", "description": "Input ,A =[p]"}, "INR A": {"name": "3C", "size": "1", "description": "Increment"}, "INR B": {"name": "04", "size": "1", "description": "Increment"}, "INR C": {"name": "0C", "size": "1", "description": "Increment"}, "INR D": {"name": "14", "size": "1", "description": "Increment"}, "INR E": {"name": "1C", "size": "1", "description": "Increment"}, "INR H": {"name": "24", "size": "1", "description": "Increment"}, "INR L": {"name": "2C", "size": "1", "description": "Increment"}, "INR M": {"name": "34", "size": "1", "description": "Increment memory"}, "INX B": {"name": "03", "size": "1", "description": "Increment BC"}, "INX D": {"name": "13", "size": "1", "description": "Increment DE"}, "INX H": {"name": "23", "size": "1", "description": "Increment HL"}, "INX SP": {"name": "33", "size": "1", "description": "Increment Stack Pointer"}, "JC Label": {"name": "DA", "size": "3", "description": "Jump on carry"}, "JM Label": {"name": "FA", "size": "3", "description": "Jump on minus"}, "JMP Label": {"name": "C3", "size": "3", "description": "Jump unconditional"}, "JNC Label": {"name": "D2", "size": "3", "description": "Jump on no carry"}, "JNZ Label": {"name": "C2", "size": "3", "description": "Jump on no Zero"}, "JP Label": {"name": "F2", "size": "3", "description": "Jump on Plus"}, "JPE Label": {"name": "EA", "size": "3", "description": "Jump on Parity Even"}, "JPO Label": {"name": "E2", "size": "3", "description": "Jump on Parity Odd"}, "JZ Label": {"name": "CA", "size": "3", "description": "Jump on Zero"}, "LDA Address": {"name": "3A", "size": "3", "description": "Load accumulator direct A=[a]"}, "LDAX B": {"name": "0A", "size": "1", "description": "Load accumulator indirect A=[BC]"}, "LDAX D": {"name": "1A", "size": "1", "description": "Load accumulator indirect A=[DE]"}, "LHLD Address": {"name": "2A", "size": "3", "description": "Load HL Direct"}, "LXI B": {"name": "01", "size": "3", "description": "Load Immediate BC"}, "LXI D": {"name": "11", "size": "3", "description": "Load Immediate DE"}, "LXI H": {"name": "21", "size": "3", "description": "Load Immediate HL"}, "LXI SP": {"name": "31", "size": "3", "description": "Load Immediate Stack Pointer"}, "MOV A, A": {"name": "7F", "size": "1", "description": "Move register to register , A =A"}, "MOV A, B": {"name": "78", "size": "1", "description": "Move register to register , A =B"}, "MOV A, C": {"name": "79", "size": "1", "description": "Move register to register , A =C"}, "MOV A, D": {"name": "7A", "size": "1", "description": "Move register to register , A =D"}, "MOV A, E": {"name": "7B", "size": "1", "description": "Move register to register , A =E"}, "MOV A, H": {"name": "7C", "size": "1", "description": "Move register to register , A =H"}, "MOV A, L": {"name": "7D", "size": "1", "description": "Move register to register , A =L"}, "MOV A, M": {"name": "7E", "size": "1", "description": "Move memory to register , A =[HL]"}, "MOV B, A": {"name": "47", "size": "1", "description": "Move register to register , B =A"}, "MOV B, B": {"name": "40", "size": "1", "description": "Move register to register , B =B"}, "MOV B, C": {"name": "41", "size": "1", "description": "Move register to register , B =C"}, "MOV B, D": {"name": "42", "size": "1", "description": "Move register to register , B =D"}, "MOV B, E": {"name": "43", "size": "1", "description": "Move register to register , B =E"}, "MOV B, H": {"name": "44", "size": "1", "description": "Move register to register , B =H"}, "MOV B, L": {"name": "45", "size": "1", "description": "Move register to register , B =L"}, "MOV B, M": {"name": "46", "size": "1", "description": "Move  memory to register  , B =[HL]"}, "MOV C, A": {"name": "4F", "size": "1", "description": "Move register to register , C =A"}, "MOV C, B": {"name": "48", "size": "1", "description": "Move register to register , C =B"}, "MOV C, C": {"name": "49", "size": "1", "description": "Move register to register , C =C"}, "MOV C, D": {"name": "4A", "size": "1", "description": "Move register to register , C =D"}, "MOV C, E": {"name": "4B", "size": "1", "description": "Move register to register , C =E"}, "MOV C, H": {"name": "4C", "size": "1", "description": "Move register to register , C =H"}, "MOV C, L": {"name": "4D", "size": "1", "description": "Move register to register , C =L"}, "MOV C, M": {"name": "4E", "size": "1", "description": "Move memory to register , C =[HL]"}, "MOV D, A": {"name": "57", "size": "1", "description": "Move register to register , D =A"}, "MOV D, B": {"name": "50", "size": "1", "description": "Move register to register , D =B"}, "MOV D, C": {"name": "51", "size": "1", "description": "Move register to register , D =C"}, "MOV D, D": {"name": "52", "size": "1", "description": "Move register to register , D =D"}, "MOV D, E": {"name": "53", "size": "1", "description": "Move register to register , D =E"}, "MOV D, H": {"name": "54", "size": "1", "description": "Move register to register , D =H"}, "MOV D, L": {"name": "55", "size": "1", "description": "Move register to register , D =L"}, "MOV D, M": {"name": "56", "size": "1", "description": "Move memory to register , D =[HL]"}, "MOV E, A": {"name": "5F", "size": "1", "description": "Move register to register , E =A"}, "MOV E, B": {"name": "58", "size": "1", "description": "Move register to register , E =B"}, "MOV E, C": {"name": "59", "size": "1", "description": "Move register to register , E =C"}, "MOV E, D": {"name": "5A", "size": "1", "description": "Move register to register , E =D"}, "MOV E, E": {"name": "5B", "size": "1", "description": "Move register to register , E =E"}, "MOV E, H": {"name": "5C", "size": "1", "description": "Move register to register , E =H"}, "MOV E, L": {"name": "5D", "size": "1", "description": "Move register to register , E =L"}, "MOV E, M": {"name": "5E", "size": "1", "description": "Move memory to register , E =[HL]"}, "MOV H, A": {"name": "67", "size": "1", "description": "Move register to register , H =A"}, "MOV H, B": {"name": "60", "size": "1", "description": "Move register to register , H =B"}, "MOV H, C": {"name": "61", "size": "1", "description": "Move register to register , H =C"}, "MOV H, D": {"name": "62", "size": "1", "description": "Move register to register , H =D"}, "MOV H, E": {"name": "63", "size": "1", "description": "Move register to register , H =E"}, "MOV H, H": {"name": "64", "size": "1", "description": "Move register to register , H =H"}, "MOV H, L": {"name": "65", "size": "1", "description": "Move register to register , H =L"}, "MOV H, M": {"name": "66", "size": "1", "description": "Move memory to register , H =[HL]"}, "MOV L, A": {"name": "6F", "size": "1", "description": "Move register to register , L =A"}, "MOV L, B": {"name": "68", "size": "1", "description": "Move register to register , L =B"}, "MOV L, C": {"name": "69", "size": "1", "description": "Move register to register , L =C"}, "MOV L, D": {"name": "6A", "size": "1", "description": "Move register to register , L =D"}, "MOV L, E": {"name": "6B", "size": "1", "description": "Move register to register , L =E"}, "MOV L, H": {"name": "6C", "size": "1", "description": "Move register to register , L =H"}, "MOV L, L": {"name": "6D", "size": "1", "description": "Move register to register , L =L"}, "MOV L, M": {"name": "6E", "size": "1", "description": "Move memory to register , L =[HL]"}, "MOV M, A": {"name": "77", "size": "1", "description": "Move register to memory , [HL] =A"}, "MOV M, B": {"name": "70", "size": "1", "description": "Move register to memory , [HL] =B"}, "MOV M, C": {"name": "71", "size": "1", "description": "Move register to memory , [HL] =C"}, "MOV M, D": {"name": "72", "size": "1", "description": "Move register to memory , [HL] =D"}, "MOV M, E": {"name": "73", "size": "1", "description": "Move register to memory , [HL] =E"}, "MOV M, H": {"name": "74", "size": "1", "description": "Move register to memory , [HL] =H"}, "MOV M, L": {"name": "75", "size": "1", "description": "Move register to memory , [HL] =L"}, "MVI A, Data": {"name": "3E", "size": "2", "description": "Move Immediate to register"}, "MVI B, Data": {"name": "06", "size": "2", "description": "Move Immediate to register"}, "MVI C, Data": {"name": "0E", "size": "2", "description": "Move Immediate to register"}, "MVI D, Data": {"name": "16", "size": "2", "description": "Move Immediate to register"}, "MVI E, Data": {"name": "1E", "size": "2", "description": "Move Immediate to register"}, "MVI H, Data": {"name": "26", "size": "2", "description": "Move Immediate to register"}, "MVI L, Data": {"name": "2E", "size": "2", "description": "Move Immediate to register"}, "MVI M, Data": {"name": "36", "size": "2", "description": "Move Immediate to memory"}, "NOP": {"name": "00", "size": "1", "description": "No operation"}, "ORA A": {"name": "B7", "size": "1", "description": "Inclusive OR Accumulator , A = A v r"}, "ORA B": {"name": "B0", "size": "1", "description": "Inclusive OR Accumulator , A = A v r"}, "ORA C": {"name": "B1", "size": "1", "description": "Inclusive OR Accumulator , A = A v r"}, "ORA D": {"name": "B2", "size": "1", "description": "Inclusive OR Accumulator , A = A v r"}, "ORA E": {"name": "B3", "size": "1", "description": "Inclusive OR Accumulator , A = A v r"}, "ORA H": {"name": "B4", "size": "1", "description": "Inclusive OR Accumulator , A = A v r"}, "ORA L": {"name": "B5", "size": "1", "description": "Inclusive OR Accumulator , A = A v r"}, "ORA M": {"name": "B6", "size": "1", "description": "Inclusive OR Memory , A = A v [HL]"}, "ORI Data": {"name": "F6", "size": "2", "description": "Inclusive OR Immediate"}, "OUT Port-Address": {"name": "D3", "size": "2", "description": "Output"}, "PCHL": {"name": "E9", "size": "1", "description": "Jump HL Indirect , PC =[HL]"}, "POP B": {"name": "C1", "size": "1", "description": "Pop BC , BC = [SP]+"}, "POP D": {"name": "D1", "size": "1", "description": "Pop DE , DE = [SP]+"}, "POP H": {"name": "E1", "size": "1", "description": "Pop HL , HL = [SP]+"}, "POP PSW": {"name": "F1", "size": "1", "description": "Pop processor status word , PSW ,A = [SP]+"}, "PUSH B": {"name": "C5", "size": "1", "description": "PUSH BC ,-[SP] =BC"}, "PUSH D": {"name": "D5", "size": "1", "description": "PUSH DE ,-[SP] =DE"}, "PUSH H": {"name": "E5", "size": "1", "description": "PUSH HL ,-[SP] =HL"}, "PUSH PSW": {"name": "F5", "size": "1", "description": "PUSH Processor Status Word ,-[SP] = PSW ,A"}, "RAL": {"name": "17", "size": "1", "description": "Rotate accumulator left , A={CY,A}<-"}, "RAR": {"name": "1F", "size": "1", "description": "Rotate Accumulator Right , A=->{CY,A}"}, "RC": {"name": "D8", "size": "1", "description": "Return on carry"}, "RET": {"name": "C9", "size": "1", "description": "Return  , PC=[SP]+"}, "RIM": {"name": "20", "size": "1", "description": "Read Interrupt Mask  ,A=mask"}, "RLC": {"name": "07", "size": "1", "description": "Rotate Left Circular , A=A<-"}, "RM": {"name": "F8", "size": "1", "description": "Return on Minus"}, "RNC": {"name": "D0", "size": "1", "description": "Return on No Carry"}, "RNZ": {"name": "C0", "size": "1", "description": "Return on No Zero "}, "RP": {"name": "F0", "size": "1", "description": "Return on Plus"}, "RPE": {"name": "E8", "size": "1", "description": "Return on Parity Even"}, "RPO": {"name": "E0", "size": "1", "description": "Return on Parity ODD"}, "RRC": {"name": "0F", "size": "1", "description": "Rotate Right Circular"}, "RST 0": {"name": "C7", "size": "1", "description": "Restart  ,-[SP]=PC,PC=0"}, "RST 1": {"name": "CF", "size": "1", "description": "Restart  ,-[SP]=PC,PC=1"}, "RST 2": {"name": "D7", "size": "1", "description": "Restart  ,-[SP]=PC,PC=2"}, "RST 3": {"name": "DF", "size": "1", "description": "Restart  ,-[SP]=PC,PC=3"}, "RST 4": {"name": "E7", "size": "1", "description": "Restart  ,-[SP]=PC,PC=4"}, "RST 5": {"name": "EF", "size": "1", "description": "Restart  ,-[SP]=PC,PC=5"}, "RST 6": {"name": "F7", "size": "1", "description": "Restart  ,-[SP]=PC,PC=6"}, "RST 7": {"name": "FF", "size": "1", "description": "Restart  ,-[SP]=PC,PC=7"}, "RZ": {"name": "C8", "size": "1", "description": "Return on Zero"}, "SBB A": {"name": "9F", "size": "1", "description": "Subtract with Borrow , A=A-r-CY "}, "SBB B": {"name": "98", "size": "1", "description": "Subtract with Borrow , A=A-r-CY "}, "SBB C": {"name": "99", "size": "1", "description": "Subtract with Borrow , A=A-r-CY "}, "SBB D": {"name": "9A", "size": "1", "description": "Subtract with Borrow , A=A-r-CY "}, "SBB E": {"name": "9B", "size": "1", "description": "Subtract with Borrow , A=A-r-CY "}, "SBB H": {"name": "9C", "size": "1", "description": "Subtract with Borrow , A=A-r-CY "}, "SBB L": {"name": "9D", "size": "1", "description": "Subtract with Borrow , A=A-r-CY "}, "SBB M": {"name": "9E", "size": "1", "description": "Subtract with Borrow , A=A-[HL]-CY "}, "SBI Data": {"name": "DE", "size": "2", "description": "Subtract with Borrow Immediate, A=A-r-CY "}, "SHLD Address": {"name": "22", "size": "3", "description": "Store HL Direct , [a]=HL"}, "SIM": {"name": "30", "size": "1", "description": "Set Interrupt Mask , mask=A"}, "SPHL": {"name": "F9", "size": "1", "description": "Move HL to SP , SP=HL "}, "STA Address": {"name": "32", "size": "3", "description": "Store Accumulator , [a] =A"}, "STAX B": {"name": "02", "size": "1", "description": "Store Accumulator indirect , [BC]=A"}, "STAX D": {"name": "12", "size": "1", "description": "Store Accumulator indirect ,[DE]=A"}, "STC": {"name": "37", "size": "1", "description": "Set Carry  ,CY=1"}, "SUB A": {"name": "97", "size": "1", "description": "Subtract ,A=A-r"}, "SUB B": {"name": "90", "size": "1", "description": "Subtract ,A=A-r"}, "SUB C": {"name": "91", "size": "1", "description": "Subtract ,A=A-r"}, "SUB D": {"name": "92", "size": "1", "description": "Subtract ,A=A-r"}, "SUB E": {"name": "93", "size": "1", "description": "Subtract ,A=A-r"}, "SUB H": {"name": "94", "size": "1", "description": "Subtract ,A=A-r"}, "SUB L": {"name": "95", "size": "1", "description": "Subtract ,A=A-r"}, "SUB M": {"name": "96", "size": "1", "description": "Subtract memory,A=A-[HL]"}, "SUI Data": {"name": "D6", "size": "2", "description": "Subtract Immedaite,A=A-r"}, "XCHG": {"name": "EB", "size": "1", "description": "Exchange or Swap HL with DE , HL<->DE"}, "XRA A": {"name": "AF", "size": "1", "description": "Exclusive OR Accumulator ,A=Axr"}, "XRA B": {"name": "A8", "size": "1", "description": "Exclusive OR Accumulator ,A=Axr"}, "XRA C": {"name": "A9", "size": "1", "description": "Exclusive OR Accumulator ,A=Axr"}, "XRA D": {"name": "AA", "size": "1", "description": "Exclusive OR Accumulator ,A=Axr"}, "XRA E": {"name": "AB", "size": "1", "description": "Exclusive OR Accumulator ,A=Axr"}, "XRA H": {"name": "AC", "size": "1", "description": "Exclusive OR Accumulator ,A=Axr"}, "XRA L": {"name": "AD", "size": "1", "description": "Exclusive OR Accumulator ,A=Axr"}, "XRA M": {"name": "AE", "size": "1", "description": "Exclusive OR Accumulator ,A=Ax[HL]"}, "XRI Data": {"name": "EE", "size": "2", "description": "Exclusive OR Immediate ,A=Axn"}, "XTHL": {"name": "E3", "size": "1", "description": "Exchange stack Top with HL , [SP]<->HL "}}


function escape( word) {
    if ( word === null )return '';
     word.replace(/[^a-zA-Z0-9 ]/g, "");
     return word;
}


function matches( value , index, patt) {
    var b = false;
    value.forEach( obj => {
        if ( typeof(obj) === 'string'){
            if(patt.test(obj)) b = true;
        }
        if ( typeof(obj) === 'object') {
             if (patt.test( obj.description)) b = true;
        }   
    })
    if ( b === true) return true;
    else return false;
}


function ret(suggestions){
    console.log(typeof(suggestions))
    return (suggestions);

}


export const findSuggestions =(query) => {
      query =  escape(query);
        query = '(\w*'+ query + '\w*)';
        const patt = new RegExp(query , 'gi')
      var suggestions = Object.entries(mat).filter((value, index) => matches(value ,index ,patt));
      return (suggestions);
}

export const getAll =() => {
    return (Object.entries(mat));
}



// console.log(findSuggestions('mov'));

